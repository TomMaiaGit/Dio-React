import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 22px;
    position: relative;

    color:#ffff;
    padding: 2px 12px;
    min-width: 12px;
    width: 100%;

    //é possivel adcionar lógica, com template STRING podemos fazer uma condição 
    //se a pripriedade contida no parametro (variant) for diferente de PRIMARY altera o CSS 
    ${ ({variant}) => variant != "primary"  &&  css `
        min-width: 167px;
        height: 33px;

        background: #E41050;

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E41050;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
            
        }
    
    
    
    `} 
    
`