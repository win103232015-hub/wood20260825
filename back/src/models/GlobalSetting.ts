import { Schema, model } from 'mongoose';

export interface IGlobalSetting {
  key: string;
  noReviewMode: boolean; // 無審核模式：開啟後作品發布即可自動公開
}

const GlobalSettingSchema = new Schema<IGlobalSetting>({
  key: { type: String, required: true, unique: true, default: 'global' },
  noReviewMode: { type: Boolean, default: false },
});

export const GlobalSetting = model<IGlobalSetting>('GlobalSetting', GlobalSettingSchema);
