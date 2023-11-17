import { Row, Col, DatePicker} from 'antd';
import type { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

export type RangeValue = [Dayjs | null, Dayjs | null] | null;

interface DateRangeSetterProps {
  value: RangeValue | null;
  onChange: (value: RangeValue) => void;
}

export const DateRangeSetter = (props: DateRangeSetterProps) => {
  return <Row gutter={8}>
    <Col>
      日期范围
    </Col>
    <Col>
      <RangePicker onChange={props.onChange} value={props.value} />
    </Col>
  </Row>;
}
