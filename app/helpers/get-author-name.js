import { helper } from '@ember/component/helper';

export default helper(function getAuthorName(params/*, hash*/) {
  let [lastName, firstName, secondName] = params;
  return `${lastName} ${firstName} ${secondName}`;
});
