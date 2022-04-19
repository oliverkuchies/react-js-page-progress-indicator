import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {getCurrentPage} from "../../features/page/pageSlice";
import styled from '@emotion/styled'
export default function PageIndicator() {
    const current_page : number = useSelector(getCurrentPage);

    const pages : Array<number> = [1, 2];

    const PageCircleContainer = styled('div')(
        () => `
		  margin: 20px auto;
		  text-align: center;
		`,
    );

    const PageCircle = styled('span')(
        () => `
            background-color: #3c74c6;
            width: 50px;
            font-weight: bold;
            height: 50px;
            border-radius: 50%;
            display: inline-block;
            position: relative;
            margin-left: 49px;
            &:not(:last-child) {
                &.complete {
                    &:before {
                        content: " ";
                        background-color: #3c74c6;
                        width: 50px;
                        position: absolute;
                        top: 48%;
                        left: 50px;
                        height: 5px;
                    }
                }
                &:not(.complete) {
                    &:before {
                        content: " ";
                        background-color: grey;
                        width: 50px;
                        position: absolute;
                        top: 48%;
                        left: 50px;
                        height: 5px;
                    }
                }
            }
            &:not(:first-child) {
                &.complete {
                    &:before {
                        content: " ";
                        background-color: #3c74c6;
                        width: 50px;
                        position: absolute;
                        top: 48%;
                        right: 50px;
                        height: 5px;
                    }
                }
                &:not(.complete) {
                    &:before {
                        content: " ";
                        background-color: grey;
                        width: 50px;
                        position: absolute;
                        top: 48%;
                        right: 50px;
                        height: 5px;
                    }
                }
            }
		`,
    );

    const PageCircleNumber = styled('span')(
        () => `
		  color: white;
		  position: absolute;
		  top: 28%;
		  left: 39%;
		`,
    );

    return <PageCircleContainer>
        {pages.map(page =>
            <PageCircle className={(current_page > page) ? 'complete' : 'na'}>
                <PageCircleNumber>{page}</PageCircleNumber>
            </PageCircle>
        )}
    </PageCircleContainer>
}