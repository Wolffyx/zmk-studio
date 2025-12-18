import { useCallback } from 'react'
import { LockState } from '@zmkfirmware/zmk-studio-ts-client/core'
import { RestoreStock } from './RestoreStock.tsx'
import useConnectionStore from '../stores/ConnectionStore.ts'
import undoRedoStore from '../stores/UndoRedoStore.ts'
import { Button } from '@/components/ui/button.tsx'
import { Settings, Power } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx'
import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar.tsx'
import { toast } from 'sonner'
import { callRemoteProcedureControl } from '@/services/CallRemoteProcedureControl.ts'

export const DeviceMenu = () => {
    const {
        connection,
        setConnection,
        deviceName,
        lockState,
        disconnect,
    } = useConnectionStore()
    const { reset } = undoRedoStore()

    const resetSettings = useCallback(async () => {
        let resp = await callRemoteProcedureControl({
            core: { resetSettings: true },
        })

        if (!resp.core?.resetSettings) {
            console.error('Failed to settings reset', resp)
            toast.error('Failed to settings reset')
            return
        }

        reset()

        const currentConnection = connection
        setConnection(null)

        setTimeout(() => {
            setConnection(currentConnection)
        }, 0)
    }, [connection, reset, setConnection])

    const isDisabled =
        !deviceName ||
        lockState !== LockState.ZMK_STUDIO_CORE_LOCK_STATE_UNLOCKED

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full">
                        <Button
                            variant="outline"
                            className="w-full justify-between"
                            disabled={isDisabled}
                        >
                            <span className="truncate">
                                {deviceName || 'No Device Connected'}
                            </span>
                            <Settings className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuItem
                            onClick={disconnect}
                            className="text-destructive focus:text-destructive"
                        >
                            <Power className="mr-2 h-4 w-4" />
                            Disconnect
                        </DropdownMenuItem>
                        <RestoreStock onOk={() => resetSettings()} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
