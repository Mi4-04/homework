import React, { useRef } from 'react'
import { Button } from 'styled-bootstrap-components'
import {
  Main, Content, UploadInput, UploadLabel, Div,
} from './style'

const Modal = ({ showModal, setActive }) => {
  const modalRef = useRef()
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setActive(false);
    }
  };

  const onChange = (e) => {
    const { files } = e.target
    const render = new FileReader()
    render.readAsBinaryString(files[0])

    render.onload = (e) => {
      console.log('img: ', e.target.result)
      const formData = { file: e.target.result }
    }
  }

  return (
    <form>
    {showModal ? (
    <Main onClick = {closeModal} ref = {modalRef}>
    <Content onClick = {(e) => e.stopPropagation()}>
<h2>Выбрать файл</h2>
<p><small>Загружать формат .png, .jpeg, .jpg </small></p>
<UploadLabel htmlFor = "file">
<UploadInput type = "file" id = "file" name = "file" onChange = {(e) => onChange(e)} /> Загрузить файл</UploadLabel>
<Div>
<Button type = "submit" success> Отправить </Button>
</Div>
        </Content>
    </Main>
    ) : null}
</form>

  )
}

export default Modal;
