import React from 'react'
import LayoutBasic from '../../Common/LayoutBasic';

export const Model3DPage = () => {
  return (<>
    <LayoutBasic>
        <iframe src='https://etihad-stadium-3-d.vercel.app/' style={{width:"100%", height:"85vh"}} />
    </LayoutBasic>
  </>)
}
export default Model3DPage;