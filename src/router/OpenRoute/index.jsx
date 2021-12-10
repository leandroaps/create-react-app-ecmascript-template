import FULL_PAGE from '../../templates/FullPage';
import TEXT_ONLY from '../../templates/TextOnly';

export default function OPEN_ROUTE({ template }) {
  if (template === 'full') {
    return <FULL_PAGE />;
  }
  return <TEXT_ONLY />;
}
