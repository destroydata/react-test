const PasswordDiv = ({ isFirst, onChangePassword, passwordCheck, isEqual }) => {
    return isFirst &&
        <>
            <input name="password"
                type="password"
                placeholder="password"
                onChange={onChangePassword}
            />
            <input name="repassword"
                type="password"
                placeholder="repassword"
                onChange={onChangePassword}
                onBlur={passwordCheck}
            />
            {isEqual || <p style={{ color: 'red' }}>
                비밀번호가 다릅니다.</p>}
        </>
}
export default PasswordDiv;