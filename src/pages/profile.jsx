// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { useToast } from '@/components/ui';
// @ts-ignore;
import { ArrowLeft, LogOut, RefreshCw } from 'lucide-react';

import { UserInfoCard } from '@/components/UserInfoCard';
import { StatsCard } from '@/components/StatsCard';
import { MenuList } from '@/components/MenuList';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { AnimatedCard } from '@/components/AnimatedCard';
export default function ProfilePage(props) {
  const {
    $w,
    style
  } = props;
  const {
    toast
  } = useToast();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    orders: 0,
    points: 0,
    level: 'Lv.1',
    growth: 0
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    try {
      setLoading(true);
      // 获取当前用户信息
      const currentUser = $w.auth.currentUser;
      if (!currentUser) {
        toast({
          title: "未登录",
          description: "请先登录后再查看个人中心",
          variant: "destructive"
        });
        return;
      }
      setUser(currentUser);

      // 模拟加载统计数据
      setStats({
        orders: Math.floor(Math.random() * 50) + 1,
        points: Math.floor(Math.random() * 1000) + 100,
        level: currentUser.type === 'vip' ? 'Lv.5' : currentUser.type === 'premium' ? 'Lv.3' : 'Lv.1',
        growth: Math.floor(Math.random() * 500) + 50
      });
    } catch (error) {
      console.error('加载用户数据失败:', error);
      toast({
        title: "加载失败",
        description: "无法加载用户信息，请稍后重试",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadUserData();
    setRefreshing(false);
    toast({
      title: "刷新成功",
      description: "数据已更新"
    });
  };
  const handleMenuClick = action => {
    try {
      switch (action) {
        case 'orders':
          $w.utils.navigateTo({
            pageId: 'orders',
            params: {}
          });
          break;
        case 'favorites':
          $w.utils.navigateTo({
            pageId: 'favorites',
            params: {}
          });
          break;
        case 'addresses':
          $w.utils.navigateTo({
            pageId: 'addresses',
            params: {}
          });
          break;
        case 'payment':
          $w.utils.navigateTo({
            pageId: 'payment',
            params: {}
          });
          break;
        case 'notifications':
          $w.utils.navigateTo({
            pageId: 'notifications',
            params: {}
          });
          break;
        case 'security':
          $w.utils.navigateTo({
            pageId: 'security',
            params: {}
          });
          break;
        case 'settings':
          $w.utils.navigateTo({
            pageId: 'settings',
            params: {}
          });
          break;
        case 'help':
          $w.utils.navigateTo({
            pageId: 'help',
            params: {}
          });
          break;
        default:
          toast({
            title: "功能开发中",
            description: `${action} 功能正在开发中，敬请期待`
          });
      }
    } catch (error) {
      console.error('页面跳转失败:', error);
      toast({
        title: "跳转失败",
        description: "无法跳转到目标页面",
        variant: "destructive"
      });
    }
  };
  const handleLogout = () => {
    try {
      toast({
        title: "登出成功",
        description: "您已成功登出"
      });
      $w.utils.navigateTo({
        pageId: 'login',
        params: {}
      });
    } catch (error) {
      console.error('登出失败:', error);
      toast({
        title: "登出失败",
        description: "登出时发生错误，请重试",
        variant: "destructive"
      });
    }
  };
  const handleBack = () => {
    try {
      $w.utils.navigateBack();
    } catch (error) {
      console.error('返回失败:', error);
      $w.utils.navigateTo({
        pageId: 'home',
        params: {}
      });
    }
  };
  if (loading) {
    return <div style={style} className="min-h-screen gradient-bg">
        <div className="flex items-center justify-center h-screen">
          <LoadingSpinner size="large" />
        </div>
      </div>;
  }
  return <div style={style} className="min-h-screen gradient-bg">
      {/* 头部导航 */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={handleBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800">个人中心</h1>
          
          <div className="flex items-center space-x-2">
            <button onClick={handleRefresh} disabled={refreshing} className="p-2 text-gray-600 hover:text-gray-800 transition-colors">
              <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
            </button>
            <button onClick={handleLogout} className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-sm">登出</span>
            </button>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* 用户信息卡片 */}
        <AnimatedCard animation="slide-up" delay={100}>
          <UserInfoCard user={user} />
        </AnimatedCard>

        {/* 统计数据 */}
        <AnimatedCard animation="slide-up" delay={200}>
          <StatsCard stats={stats} />
        </AnimatedCard>

        {/* 功能菜单 */}
        <AnimatedCard animation="slide-up" delay={300}>
          <MenuList onMenuClick={handleMenuClick} />
        </AnimatedCard>

        {/* 底部信息 */}
        <AnimatedCard animation="slide-up" delay={400}>
          <div className="text-center text-sm text-gray-500 py-4">
            <p>版本 v1.0.0</p>
            <p className="mt-1">© 2024 个人中心</p>
          </div>
        </AnimatedCard>
      </div>
    </div>;
}