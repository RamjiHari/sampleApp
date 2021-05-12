import styled from 'styled-components';

export const InputWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #2e64e515;
`;

export const InputField = styled.TextInput`
    justify-content: center;
    align-items: center;
    font-size: 12px;
    width:90%;
`;

export const AddImage = styled.Image`
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
`;

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SubmitBtn = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #2e64e515;
    border-radius: 5px;
    padding: 10px 25px;
`;

export const SubmitBtnText = styled.Text`
    font-size: 15px;
    font-family: 'Bold';
    color: #009387;
`;