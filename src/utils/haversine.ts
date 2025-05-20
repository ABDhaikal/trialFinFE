/**
 * Calculates the great-circle distance between two points on the Earth's surface using the Haversine formula.
 *
 * @param lat1 - Latitude of the first point in decimal degrees.
 * @param lon1 - Longitude of the first point in decimal degrees.
 * @param lat2 - Latitude of the second point in decimal degrees.
 * @param lon2 - Longitude of the second point in decimal degrees.
 * @param isMiles - Optional. If true, returns the distance in miles; otherwise, returns the distance in kilometers. Defaults to false (kilometers).
 * @returns The distance between the two points in kilometers or miles.
 */
function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  isMiles = false,
): number {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = isMiles ? 3958.8 : 6371;
  const dLat = toRad(lat2 - lat1),
    dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default haversineDistance;
