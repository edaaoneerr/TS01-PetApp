import * as Yup from 'yup';

const LoginForm = Yup.object({
        email: Yup.string().nullable().email().required('Email is required'),
        password: Yup.string().nullable().required('Password is required')
    }
);
export default LoginForm;