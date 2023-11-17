import { Row, Col, DatePicker} from 'antd';
import type { Dayjs } from 'dayjs';

interface DateYearSetterProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

export const DateYearSetter = (props: DateYearSetterProps) => {
  return <Row gutter={8}>
    <Col>
      选择年份
    </Col>
    <Col>
      <DatePicker onChange={props.onChange} value={props.value} picker='year' />
    </Col>
  </Row>;
}
