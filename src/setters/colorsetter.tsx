import { Col, ColorPicker, Row } from 'antd';
import type { Color } from 'antd/es/color-picker';

interface ColorSetterProps {
  value: Color | string;
  onChange: (value: Color | string) => void;
}

export const ColorSetter = (props: ColorSetterProps) => {

  return <Row gutter={8}>
  <Col>
    颜色
  </Col>
  <Col>
    <ColorPicker value={props.value} onChange={props.onChange} showText />
  </Col>
</Row>;
};
