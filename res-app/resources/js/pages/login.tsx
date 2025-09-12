import { useForm } from '@inertiajs/react';
import {
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@mui/material';

type Fields = {
    email: string;
    password: string;
};
export default function Welcome(): React.ReactElement {
    const { data, setData, post, processing, errors } =
        useForm<Fields>({
            email: '',
            password: '',
        });

    const handleSubmit = (
        e: React.SyntheticEvent<HTMLFormElement>,
    ): void => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="flex min-h-dvh min-w-full items-center justify-center p-8 align-middle font-sans sm:p-20">
            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md flex-col gap-6"
            >
                <FormControl
                    fullWidth
                    error={!!errors.email}
                >
                    <InputLabel htmlFor="email">
                        Email
                    </InputLabel>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) =>
                            setData('email', e.target.value)
                        }
                        aria-describedby="email-helper-text"
                    />
                    <FormHelperText id="email-helper-text">
                        {errors.email ??
                            'Nous ne partagerons jamais votre email.'}
                    </FormHelperText>
                </FormControl>

                <FormControl
                    fullWidth
                    error={!!errors.password}
                >
                    <InputLabel htmlFor="password">
                        Mot de passe
                    </InputLabel>
                    <Input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) =>
                            setData(
                                'password',
                                e.target.value,
                            )
                        }
                        aria-describedby="password-helper-text"
                    />
                    <FormHelperText id="password-helper-text">
                        {errors.password ??
                            'Nous ne partagerons jamais votre mot de passe.'}
                    </FormHelperText>
                </FormControl>
                {!processing ? (
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={processing}
                    >
                        Envoyer
                    </Button>
                ) : (
                    <CircularProgress
                        sx={{ margin: '0 auto' }}
                    />
                )}
            </form>
        </div>
    );
}
