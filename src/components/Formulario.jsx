import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  SimpleGrid,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm()

  // const { errors } = formState

  // console.log(errors)
  console.log(isDirty)

  const login = (data) => {
    console.log(data)
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(login)}>
        <SimpleGrid gap={5}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Este email no es valido',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...register('password', {
                required: 'Este campo es requerido',
                minLength: {
                  value: 6,
                  message: 'El minimo de caractes es 6',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" isDisabled={!isDirty}>
            Login
          </Button>
        </SimpleGrid>
      </form>
    </div>
  )
}

/* <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'Este campo es requerido',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Este email no es valido',
              },
            })}
          />
          <span style={{ color: 'red' }}>{errors.email?.message}</span>
        </div> */

/* <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Este campo es requerido',
              minLength: {
                value: 6,
                message: 'El minimo de caractes es 6',
              },
            })}
          />

          <span style={{ color: 'red' }}>{errors.password?.message}</span>
        </div> */
