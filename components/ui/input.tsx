'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useToggle } from '@/providers/use-toggle';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    variant: 'auth' | 'footer'
  }
export interface IconShowPasswordProps {
  isShow: boolean;
  onToggle: () => void;
}

const IconShowPassword: React.FC<IconShowPasswordProps> = ({
  isShow,
  onToggle,
}) => {
  return (
    <div className='cursor-pointer absolute top-2 right-4' onClick={onToggle}>
      {!isShow ? (
        <Image
          src='/icons/eye-slash.svg'
          alt='icon'
          height={0}
          width={0}
          className='w-6 h-6'
        />
      ) : (
        <Image
          src='/icons/eye.svg'
          alt='icon'
          height={0}
          width={0}
          className='w-6 h-6'
        />
      )}
    </div>
  );
};

const getVariant = (variant: string) => {
  switch (variant) {
    case 'auth':
      return 'rounded-md px-5 py-2 text-base'
    case 'footer':
      return 'rounded-[50px] pl-12 pr-36 py-3 text-base'
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    const [isShowPassword, onTogglePassword] = useToggle()

    return (
      <div className='relative'>
        <input
          type={isShowPassword ? 'text' : type}
          className={cn(
            'flex w-full bg-gray-light border-2 border-gray-light focus:border-primary outline-none placeholder:text-placeholder',
            className,
            getVariant(variant)
          )}
          ref={ref}
          {...props}
        />
        {
          type === 'password' &&
            <IconShowPassword
              isShow={isShowPassword}
              onToggle={onTogglePassword}
            />
        }
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
