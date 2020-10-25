import instance from '../../utils/api';
import { GET } from '../../const';

export default ({ method = GET, data, url }) => instance.request({ method, data, url });
