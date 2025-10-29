import { type InferInput } from '@vinejs/vine/types'

import type { signupValidator } from "#validators/user"

export namespace Validators {
  export type Signup = InferInput<typeof signupValidator>

}
