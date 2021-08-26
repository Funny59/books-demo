import { helper } from '@ember/component/helper';

export default helper(function getBookRating(params/*, hash*/) {
  let [rating] = params;
  return `width: ${rating}%;`;
});
