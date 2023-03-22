import { ComponentType } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { ErrorMessage } from '@components/error-message/error-message.component'

export const ErrorFallback: ComponentType<FallbackProps> = ({ error }) => {
  return (
    <div data-testid="ErrorFallback">
      <ErrorMessage error={error} showImage={true} />
    </div>
  )
}
