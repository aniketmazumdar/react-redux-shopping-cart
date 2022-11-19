import React from 'react';
import ReactLoading from 'react-loading';
import {LoadingContainer} from './loader.style';

export default function Loader({ type, color }) {
  return (
    <LoadingContainer>
      <div className='loader-wrapper'>
        <ReactLoading type={'spinningBubbles'} color={'#000'} height={75} width={75} />
      </div>
      <h5 className='mt-4 text-center'>loading...</h5>
    </LoadingContainer>
  )
}
