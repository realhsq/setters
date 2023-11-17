import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

interface FunctionSetterProps {
  value: string;
  onChange: (value: string) => void;
}

export const FunctionSetter = (props: FunctionSetterProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [functionValue, setFunctionValue] = useState(''); // State to hold the edited function value

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handleFunctionChange = (e: any) => {
    setFunctionValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>绑定函数</Button>

      <Modal
        title="编辑函数"
        open={modalVisible}
        onOk={handleConfirm}
        onCancel={handleCancel}
      >
        <CodeMirror
          value={functionValue}
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            setFunctionValue(value);
          }}
        />
      </Modal>
    </div>
  );
};
