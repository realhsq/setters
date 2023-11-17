import { Row, Col, DatePicker} from 'antd';
import type { Dayjs } from 'dayjs';

interface DateMonthSetterProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

export const DateMonthSetter = (props: DateMonthSetterProps) => {
  return <Row gutter={8}>
    <Col>
      选择月份
    </Col>
    <Col>
      <DatePicker onChange={props.onChange} value={props.value} picker='month' />
    </Col>
  </Row>;
}
