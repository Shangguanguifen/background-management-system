import { Link } from 'react-router-dom'
import { Result, Button } from 'antd';

function errorPage() {
  return <Result
  status="404"
  title="404"
  subTitle="Sorry, the page you visited does not exist."
  extra={<Button type="primary"><Link to='/'> 回到首页 </Link></Button>}
/>
}

export default errorPage;