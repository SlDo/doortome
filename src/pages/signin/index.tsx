import React, { ReactElement, useEffect, useRef } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import style from './style.module.scss';
import { Logo } from '../../components/ui/logo';
import { FormField } from '../../components/ui/form/formField';
import { Input } from '../../components/ui/input';
import { Form } from '../../components/ui/form/form';
import { Link } from '../../components/ui/link';
import { useAuth } from '../../utils/packages/auth/useAuth';

export const SigninPage = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const {
    isLoggedIn, login,
  } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const onClick = (): void => {
    if (!isLoggedIn) {
      login({ email: emailRef.current?.value, password: passwordRef?.current?.value, fingerprint: navigator.userAgent }).then((success) => {
        if (success) {
          history.push('/');

          formRef.current?.reset();
        }
      });
    }
  };

  return (
    <main className={style.page}>
      <Form ref={formRef} className={style.form}>
        <Logo className={style.logo} />
        <FormField fullWidth>
          <Input ref={emailRef} type="email" placeholder="Почта" />
        </FormField>
        <FormField fullWidth>
          <Input ref={passwordRef} type="password" placeholder="Пароль" />
        </FormField>
        <Button className={style.button} onClick={onClick}>Войти</Button>
        <Link component={RouterLink} to="/signup">Перейти к регистрации</Link>
      </Form>
    </main>
  );
};
