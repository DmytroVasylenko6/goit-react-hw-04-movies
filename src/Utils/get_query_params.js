import queryString from 'query-string';

export default function getQueryParams(value) {
  return queryString.parse(value);
}
