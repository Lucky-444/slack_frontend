import { CreateChannelModal } from '../../molecules/CreateChannelModal/CreateChannelModal';
import { CreateWorkspaceModal } from '../../molecules/CreateWorkspaceModal/CreateWorkspaceModal'
import { WorkspacePreferencesModal } from '../../molecules/workspace/WorkspacePreferencesModal';

export const Modals = () => {
    return (
        <>
            <CreateWorkspaceModal />
            <WorkspacePreferencesModal />
            <CreateChannelModal />
        </>
    );
};