import 'antd/dist/reset.css';
import "./TopView.css"

import { Image } from 'antd';
const TopView = () => {
  return (
    <div className='mainDiv'>
      <div className='innerDiv'>
        <Image
          width={72}
          height={57}

          src="data:image/jpeg;base64,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"
        />
        <h1>Checkout form</h1>

        <p>Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
        </p>
      </div>
    </div>
  )
}

export default TopView