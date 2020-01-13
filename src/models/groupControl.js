import {
  getGroupApps,
  getGroupDetail,
  deleteGroup,
  editGroup,
  addGroup,
  recordShare,
  checkShare,
  deleteCompose,
  buildCompose,
  getShare,
  getSareVersion,
  getShareAppRecord,
  getShareList,
  submitShare,
  getShareEventInfo,
  startShareEvent,
  getShareStatus,
  giveupShare,
  completeShare,
  editAppCreateCompose,
  groupMonitorData,
  backup,
  getBackup,
  getBackupStatus,
  migrateApp,
  queryMigrateApp,
  delRestore,
  delBackup,
  delFailureBackup,
  startPluginShareEventInShareApp,
  getPluginShareEventInShareApp,
  queryAllBackup,
  queryRestoreState
} from "../services/group";
import cookie from "../utils/cookie";

export default {
  namespace: "groupControl",
  state: {
    // 组详情
    groupDetail: {},
    // 应用
    apps: [],
    // plugin
    plugins: []
  },
  effects: {
    *fetchBackupStatus({ payload, callback }, { call, put }) {
      const response = yield call(getBackupStatus, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *fetchBackup({ payload, callback }, { call, put }) {
      const response = yield call(getBackup, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *queryAllBackup({ payload, callback }, { call }) {
      const response = yield call(queryAllBackup, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *queryRestoreState({ payload, callback }, { call }) {
      const response = yield call(queryRestoreState, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *backup({ payload, callback }, { call, put }) {
      const response = yield call(backup, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *groupMonitorData({ payload, callback }, { call, put }) {
      const response = yield call(groupMonitorData, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *editAppCreateCompose({ payload, callback }, { call, put }) {
      const response = yield call(editAppCreateCompose, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *fetchGroupDetail({ payload, handleError }, { call, put }) {
      const response = yield call(getGroupDetail, payload, handleError);
      if (response) {
        yield put({ type: "saveGroupDetail", payload: response.bean });
      }
    },
    *fetchApps({ payload, callback }, { call, put }) {
      const response = yield call(getGroupApps, payload);
      if (response) {
        yield put({ type: "saveApps", payload: response.list });
        callback && callback(response);
      }
    },
    *delete({ payload, callback }, { call, put }) {
      const response = yield call(deleteGroup, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *deleteCompose({ payload, callback }, { call, put }) {
      const response = yield call(deleteCompose, payload);
      if (response) {
        callback && callback();
      }
    },
    *editGroup({ payload, callback }, { call, put }) {
      const response = yield call(editGroup, payload);
      if (response) {
        callback && callback();
      }
    },
    *addGroup({ payload, callback }, { call, put }) {
      const response = yield call(addGroup, payload);
      if (response) {
        callback && callback(response.bean);
      }
    },
    // 查询未完成分享记录
    *recordShare({ payload, callback }, { call, put }) {
      const response = yield call(recordShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 分享组
    *ShareGroup({ payload, callback }, { call, put }) {
      const response = yield call(checkShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 查询分享信息
    *getShareInfo({ payload, callback, handleError }, { call, put }) {
      const response = yield call(getShare, payload, handleError);
      if (response) {
        callback && callback(response);
      }
    },
    // 查询分享版本
    *getSareVersion({ payload, callback }, { call, put }) {
      const response = yield call(getSareVersion, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 查询分享记录
    *fetchShareAppRecord({ payload, callback }, { call, put }) {
      const response = yield call(getShareAppRecord, payload);
      if (response) {
        callback && callback(response);
      }
    },

    // 查询该团队下已经分享的应用列表
    *getShareList({ payload, callback }, { call, put }) {
      const response = yield call(getShareList, payload);
      if (response) {
        callback && callback(response);
      }
    },

    // 提交分享信息
    *subShareInfo({ payload, callback }, { call, put }) {
      const response = yield call(submitShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 放弃分享
    *giveupShare({ payload, callback }, { call, put }) {
      const response = yield call(giveupShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 构建compose应用
    *buildCompose({ payload, callback }, { call, put }) {
      const response = yield call(buildCompose, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *getShareEventInfo({ payload, callback }, { call, put }) {
      const response = yield call(getShareEventInfo, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *startShareEvent({ payload, callback }, { call, put }) {
      const response = yield call(startShareEvent, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *startPluginShareEventInShareApp({ payload, callback }, { call, put }) {
      const response = yield call(startPluginShareEventInShareApp, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *getPluginShareEventInShareApp({ payload, callback }, { call, put }) {
      const response = yield call(getPluginShareEventInShareApp, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *getShareStatus({ payload, callback }, { call, put }) {
      const response = yield call(getShareStatus, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *giveupShare({ payload, callback }, { call, put }) {
      const response = yield call(giveupShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *completeShare({ payload, callback }, { call, put }) {
      const response = yield call(completeShare, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 应用备份迁移
    *migrateApp({ payload, callback }, { call, put }) {
      const response = yield call(migrateApp, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 应用备份迁移状态查询
    *queryMigrateApp({ payload, callback }, { call, put }) {
      const response = yield call(queryMigrateApp, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 应用备份删除
    *delRestore({ payload, callback }, { call, put }) {
      const response = yield call(delRestore, payload);
      if (response) {
        callback && callback(response);
      }
    },
    *delBackup({ payload, callback }, { call, put }) {
      const response = yield call(delBackup, payload);
      if (response) {
        callback && callback(response);
      }
    },
    // 应用失败记录删除
    *delFailureBackup({ payload, callback }, { call, put }) {
      const response = yield call(delFailureBackup, payload);
      if (response) {
        callback && callback(response);
      }
    }
  },
  reducers: {
    clearApps(state, action) {
      return {
        ...state,
        apps: []
      };
    },
    saveApps(state, action) {
      return {
        ...state,
        apps: action.payload
      };
    },
    clearGroupDetail(state, action) {
      return {
        ...state,
        groupDetail: {}
      };
    },
    saveGroupDetail(state, action) {
      return {
        ...state,
        groupDetail: action.payload
      };
    }
  }
};
