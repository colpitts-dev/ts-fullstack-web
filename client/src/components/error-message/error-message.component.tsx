import { FC, HTMLAttributes } from 'react'

export interface ErrorMessageProps extends HTMLAttributes<HTMLDivElement> {
  error?: { title?: string; message: string }
  showImage?: boolean
  cta?: {
    label: string
    link: string
  }
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  error,
  cta,
  showImage = false,
  ...props
}) => {
  return (
    <div role="alert" {...props}>
      {error?.title ? (
        <h2 className="mb-2 lg:mb-4">{error.title}</h2>
      ) : (
        <h2 className="mb-2 lg:mb-4">
          Oops! Looks like things aren't working as expected.
        </h2>
      )}

      <p className="text-xs lg:text-sm">
        {error?.message ? error?.message : 'Please try refreshing the page'}
      </p>
    </div>
  )
}
