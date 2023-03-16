import * as React from 'react';
import { useState, useContext } from 'react';
import UserZone from '../components/layout/UserZone';
import { Context } from '../context/UserContext';
import api from '../utils/api';

export interface IUserProps {
}

export default function User(props: IUserProps) {

    return (
        <div>
            <UserZone />
        </div>
    );
}