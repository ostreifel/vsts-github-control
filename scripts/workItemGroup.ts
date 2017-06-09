import { IWorkItemNotificationListener, IWorkItemChangedArgs, IWorkItemLoadedArgs } from "TFS/WorkItemTracking/ExtensionContracts";

//Default Token: f04842f319c0b865caa2c96f105c6898622a570f

const workItemContext: Partial<IWorkItemNotificationListener> = {
    onSaved: (savedEventArgs: IWorkItemChangedArgs) => {},
    onRefreshed: (refreshEventArgs: IWorkItemChangedArgs) => {},
    onLoaded: (workItemLoadedArgs: IWorkItemLoadedArgs) => {}
};

VSS.register(VSS.getContribution().id, workItemContext);