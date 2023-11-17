import { Row, Col, DatePicker} from 'antd';
import type { Dayjs } from 'dayjs';

interface DateSetterProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

export const DateSetter = (props: DateSetterProps) => {
  return <Row gutter={8}>
    <Col>
      选择日期
    </Col>
    <Col>
      <DatePicker onChange={props.onChange} value={props.value} />
    </Col>
  </Row>;
}
