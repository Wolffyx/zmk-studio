import { useMemo } from 'react';

import type { RpcTransport } from '@zmkfirmware/zmk-studio-ts-client/transport/index';
import type { AvailableDevice } from '../tauri';
import { LockState } from '@zmkfirmware/zmk-studio-ts-client/core';
import { useModalRef } from '../misc/useModalRef.ts';
import { GenericModal } from './GenericModal.tsx';
import { ExternalLink } from '../misc/ExternalLink.tsx';
import useConnectionStore from "../stores/ConnectionStore.ts";
import useLockStore from "../stores/LockStateStore.ts";

export type TransportFactory = {
    label: string;
    connect?: () => Promise<RpcTransport>;
    pick_and_connect?: {
        list: () => Promise<Array<AvailableDevice>>;
        connect: (dev: AvailableDevice) => Promise<RpcTransport>;
    };
};

export interface UnlockModalProps {}

export const UnlockModal = ({}: UnlockModalProps) => {
    const { lockState } = useLockStore()
    const { connection } = useConnectionStore();
    const open = useMemo(
        () =>
            !!connection &&
            lockState != LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED,
        [connection, lockState],
    );
    const dialog = useModalRef(open, false, false);

    return (
        <GenericModal ref={dialog}>
            <h1 className="text-xl">Unlock To Continue</h1>
            <p>
                For security reasons, your keyboard requires unlocking before
                using ZMK Studio.
            </p>
            <p>
                If studio unlocking hasn't been added to your keymap or a combo,
                see the{' '}
                <ExternalLink href="https://zmk.dev/docs/keymaps/behaviors/studio-unlock">
                    Studio Unlock Behavior
                </ExternalLink>{' '}
                documentation for more infomation.
            </p>
        </GenericModal>
    );
};
