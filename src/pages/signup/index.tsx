import React, { ReactElement, useEffect, useRef } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Logo } from '../../components/ui/logo';
import { Input } from '../../components/ui/input';
import style from './style.module.scss';
import { Button } from '../../components/ui/button';
import { FormField } from '../../components/ui/form/formField';
import { Form } from '../../components/ui/form/form';
import { Link } from '../../components/ui/link';
import { signUp } from '../../utils/API/routes/auth';
import { AuthAtom } from '../../state/atoms/auth.atom';
import { useAuth } from '../../utils/packages/auth/useAuth';

export const SignupPage = (): ReactElement => {
  const formRef = useRef<HTMLFormElement>();
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const history = useHistory();
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [isLoggedIn]);

  const onClick = (): void => {
    const body = { email: emailRef.current?.value, password: passwordRef?.current?.value };
    signUp(body).then((res) => {
      if (res?.status === 200) {
        formRef.current?.reset();

        login({ ...body, fingerprint: navigator.userAgent }).then((success) => {
          if (success) history.push('/signin');
        });
      }
    });
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
        <Button className={style.button} onClick={onClick}>Регистрация</Button>
        <Link component={RouterLink} to="/signin">Перейти к авторизации</Link>
      </Form>
    </main>
  );
};
