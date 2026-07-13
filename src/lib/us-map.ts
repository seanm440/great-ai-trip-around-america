import { geoAlbersUsa, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { Topology, GeometryObject, GeometryCollection } from "topojson-specification";
import statesTopology from "us-atlas/states-10m.json";

const WIDTH = 960;
const HEIGHT = 600;

type UsTopology = Topology<{
  states: GeometryCollection;
  nation: GeometryCollection;
}>;

const topology = statesTopology as unknown as UsTopology;

const nation = feature(topology, topology.objects.nation as GeometryObject);
const states = feature(topology, topology.objects.states as GeometryObject);
const stateBorders = mesh(topology, topology.objects.states as GeometryObject, (a, b) => a !== b);

const projection = geoAlbersUsa().fitSize([WIDTH, HEIGHT], nation);
// Fixed decimal precision keeps server- and client-rendered path strings
// byte-identical — raw float64 trig output can differ in the lowest bits
// between Node's and the browser's V8, which otherwise causes a hydration
// mismatch on every coordinate string.
const path = geoPath(projection).digits(2);

export const US_MAP_WIDTH = WIDTH;
export const US_MAP_HEIGHT = HEIGHT;
export const US_MAP_VIEWBOX = `0 0 ${WIDTH} ${HEIGHT}`;
export const usNationOutlinePath = path(nation) ?? "";
export const usStatesFillPath = path(states) ?? "";
export const usStateBordersPath = path(stateBorders) ?? "";

function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

export function projectLatLng(lat: number, lng: number): [number, number] {
  const projected = projection([lng, lat]);
  if (!projected) return [0, 0];
  return [round(projected[0]), round(projected[1])];
}
