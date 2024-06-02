export interface _reactInternalInstance { }

export interface _reactInternal {
    _debugHookTypes?: any;
    _debugNeedsRemount: boolean;
    _debugOwner: string[];
    _debugSource?: any;
    actualDuration: number;
    actualStartTime: number;
    alternate?: any;
    child: string[];
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string[];
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: string[];
    memoizedState?: any;
    mode: number;
    pendingProps: string[];
    ref: string[];
    return: string[];
    selfBaseDuration: number;
    sibling?: any;
    stateNode: string[];
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string[];
    updateQueue: string[];
}

export interface Context { }

export interface Prop {
    allowFontScaling: boolean;
    name: string;
    size: number;
}

export interface Ref { }

export interface Updater {
    enqueueForceUpdate: string[];
    enqueueReplaceState: string[];
    enqueueSetState: string[];
    isMounted: string[];
}

export interface _icon {
    _reactInternalInstance: _reactInternalInstance;
    _reactInternals: _reactInternal;
    context: Context;
    props: Prop;
    refs: Ref;
    root?: any;
    state?: any;
    updater: Updater;
}

export interface _reactInternalInstance { }

export interface _debugOwner {
    _debugHookTypes: string[];
    _debugNeedsRemount: boolean;
    _debugOwner: string[];
    _debugSource?: any;
    actualDuration: number;
    actualStartTime: number;
    alternate: string[];
    child: string[];
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string[];
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: string[];
    memoizedState: string[];
    mode: number;
    pendingProps: string[];
    ref?: any;
    return: string[];
    selfBaseDuration: number;
    sibling?: any;
    stateNode?: any;
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string[];
    updateQueue?: any;
}

export interface _debugSource {
    columnNumber: number;
    fileName: string;
    lineNumber: number;
}

export interface Child {
    _debugHookTypes?: any;
    _debugNeedsRemount: boolean;
    _debugOwner: string[];
    _debugSource?: any;
    actualDuration: number;
    actualStartTime: number;
    alternate?: any;
    child: string[];
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string[];
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: string[];
    memoizedState?: any;
    mode: number;
    pendingProps: string[];
    ref: string[];
    return: string[];
    selfBaseDuration: number;
    sibling?: any;
    stateNode: string[];
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string[];
    updateQueue: string[];
}

export interface MemoizedProp {
    allowFontScaling: boolean;
    name: string;
    size: number;
}

export interface MemoizedState {
    fontIsLoaded: boolean;
}

export interface PendingProp {
    allowFontScaling: boolean;
    name: string;
    size: number;
}

export interface Ref {
    current: string[];
}

export interface Return {
    _debugHookTypes?: any;
    _debugNeedsRemount: boolean;
    _debugOwner: string[];
    _debugSource: string[];
    actualDuration: number;
    actualStartTime: number;
    alternate?: any;
    child: string[];
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string;
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: string[];
    memoizedState?: any;
    mode: number;
    pendingProps: string[];
    ref: string[];
    return: string[];
    selfBaseDuration: number;
    sibling?: any;
    stateNode: string[];
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string;
    updateQueue?: any;
}

export interface Sibling {
    _debugHookTypes?: any;
    _debugNeedsRemount: boolean;
    _debugOwner: string[];
    _debugSource: string[];
    actualDuration: number;
    actualStartTime: number;
    alternate?: any;
    child?: any;
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string[];
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: string[];
    memoizedState?: any;
    mode: number;
    pendingProps: string[];
    ref?: any;
    return: string[];
    selfBaseDuration: number;
    sibling?: any;
    stateNode?: any;
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string[];
    updateQueue?: any;
}

export interface UpdateQueue {
    baseState: string[];
    effects?: any;
    firstBaseUpdate?: any;
    lastBaseUpdate?: any;
    shared: string[];
}

export interface _reactInternal {
    _debugHookTypes?: any;
    _debugNeedsRemount: boolean;
    _debugOwner: _debugOwner;
    _debugSource: _debugSource;
    actualDuration: number;
    actualStartTime: number;
    alternate?: any;
    child: Child;
    childLanes: number;
    deletions?: any;
    dependencies?: any;
    elementType: string[];
    flags: number;
    index: number;
    key?: any;
    lanes: number;
    memoizedProps: MemoizedProp;
    memoizedState: MemoizedState;
    mode: number;
    pendingProps: PendingProp;
    ref: Ref;
    return: Return;
    selfBaseDuration: number;
    sibling: Sibling;
    stateNode: string[];
    subtreeFlags: number;
    tag: number;
    treeBaseDuration: number;
    type: string[];
    updateQueue: UpdateQueue;
}

export interface Context { }

export interface Prop {
    allowFontScaling: boolean;
    name: string;
    size: number;
}

export interface Ref { }

export interface State {
    fontIsLoaded: boolean;
}

export interface Updater {
    enqueueForceUpdate: string[];
    enqueueReplaceState: string[];
    enqueueSetState: string[];
    isMounted: string[];
}
const game: RootObject;

export interface RootObject {
    _icon: _icon;
    _mounted: boolean;
    _reactInternalInstance: _reactInternalInstance;
    _reactInternals: _reactInternal;
    context: Context;
    props: Prop;
    refs: Ref;
    state: State;
    updater: Updater;
}