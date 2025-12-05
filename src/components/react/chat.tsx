import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

export default function Chat() {
    useEffect(() => {
        createChat({
            webhookUrl: 'https://n8n.mexancode.com/webhook/314387d8-0b5f-4a95-a9b6-b22609e10d96/chat'
        });
    }, []);

    return <></>;
}