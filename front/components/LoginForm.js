import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user'


const ButtonWrapper = styled.div`
    margin-top: 10px;
`
const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();
    const { logInLoading, logInError } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value);
    // }, []);
    const [password, onChangePassword] = useInput('');
    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, []);

    useEffect(() => {
        if (logInError) {
            alert(logInError);
        }
    }, [logInError]);

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        // setIsLoggedIn(true);
        dispatch(loginRequestAction({email, password}));
    }, [email, password]); 

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br/>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={logInLoading }>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
};

// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,
// }

export default LoginForm;