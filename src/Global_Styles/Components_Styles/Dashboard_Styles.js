import styled from "styled-components";

const Wrapper = styled.section`
    display:flex;
    .bgColor{
        color:${({ theme }) => theme.colors.helper}
    }
`
export default Wrapper