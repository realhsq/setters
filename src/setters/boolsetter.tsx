import React from 'react';
import { Row, Col, Switch} from 'antd'

interface BoolSetterProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export const BoolSetter = (props: BoolSetterProps) => {
  return <Row gutter={8}>
    <Col>
      可以输入
    </Col>
    <Col>
      <Switch onChange={props.onChange} defaultChecked={props.value} />
    </Col>
  </Row>;
}
