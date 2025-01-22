<template>
	<view class="container">
		<!-- Banner Section -->
		<view class="banner">
			<swiper class="swiper" autoplay circular indicator-dots>
				<swiper-item>
					<image class="banner-image" src="/static/c1.png" mode="aspectFill"></image>
					<view class="banner-text">
						<text class="banner-title">欢迎来到拼音乐园！</text>
						<text class="banner-subtitle">和小动物们一起学习拼音吧</text>
					</view>
				</swiper-item>
				<swiper-item>
					<image class="banner-image" src="/static/c2.png" mode="aspectFill"></image>
					<view class="banner-text">
						<text class="banner-title">每日学习小贴士</text>
						<text class="banner-subtitle">今天学习：声母 b p m f</text>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- Progress Section -->
		<view class="progress-section">
			<view class="progress-header">
				<text class="progress-title">我的学习进度</text>
				<text class="progress-percent">25%</text>
			</view>
			<view class="progress-bar">
				<view class="progress-fill" :style="{width: '25%'}"></view>
			</view>
		</view>

		<!-- Main Grid -->
		<view class="grid-container">
			<navigator
				url="/pages/learn/index"
				class="card learn-card"
			>
				<image class="icon" src="/static/icons/shengmu.png"></image>
				<text class="label">声母学习</text>
				<text class="sub-label">已学习 5/23</text>
				<image class="decor" src="/static/c3.png"></image>
			</navigator>

			<navigator
				url="/pages/learn/index"
				class="card yunmu-card"
			>
				<image class="icon" src="/static/icons/yunmu.png"></image>
				<text class="label">韵母学习</text>
				<text class="sub-label">已学习 3/24</text>
				<image class="decor" src="/static/c4.png"></image>
			</navigator>

			<navigator
				url="/pages/games/index"
				class="card games-card"
			>
				<image class="icon" src="/static/icons/play.png"></image>
				<text class="label">拼音游戏</text>
				<text class="sub-label">3个新游戏</text>
				<image class="decor" src="/static/c5.png"></image>
			</navigator>

			<navigator
				url="/pages/profile/index"
				class="card profile-card"
			>
				<image class="icon" src="/static/icons/zhengti.png"></image>
				<text class="label">我的成就</text>
				<text class="sub-label">已获得 2/10 徽章</text>
				<image class="decor" src="/static/c6.png"></image>
			</navigator>
		</view>

		<!-- Daily Tip -->
		<view class="daily-tip">
			<image class="tip-icon" src="/static/c7.png"></image>
			<view class="tip-content">
				<text class="tip-title">今日小知识</text>
				<text class="tip-text">"b" 像小鼓敲起来，"p" 像气球飞上天</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss">
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.container {
	padding: 20px;
	background: linear-gradient(
		135deg,
		rgba(255, 235, 205, 0.15),
		rgba(255, 228, 196, 0.1)
	);
	backdrop-filter: blur(20px);
	min-height: 100vh;

	.banner {
		margin: -20px -20px 20px -20px;
		height: 200px;
		position: relative;
		border-radius: 20px;
		overflow: hidden;

		.swiper {
			height: 100%;
		}

		.banner-image {
			width: 100%;
			height: 100%;
		}

		.banner-text {
			position: absolute;
			bottom: 20px;
			left: 20px;
			background: rgba(255,255,255,0.8);
			padding: 10px 20px;
			border-radius: 15px;
			backdrop-filter: blur(5px);

			.banner-title {
				font-size: 20px;
				font-weight: bold;
				color: #333;
				display: block;
			}

			.banner-subtitle {
				font-size: 14px;
				color: #666;
			}
		}
	}

	.progress-section {
		background: rgba(255,255,255,0.2);
		border-radius: 20px;
		padding: 15px;
		margin-bottom: 20px;
		backdrop-filter: blur(10px);

		.progress-header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 10px;

			.progress-title {
				font-size: 16px;
				color: #fff;
			}

			.progress-percent {
				font-size: 16px;
				color: #fff;
				font-weight: bold;
			}
		}

		.progress-bar {
			height: 8px;
			background: rgba(255,255,255,0.3);
			border-radius: 4px;
			overflow: hidden;

			.progress-fill {
				height: 100%;
				background: #ff9a9e;
				border-radius: 4px;
				transition: width 0.5s ease;
			}
		}
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;
		margin-bottom: 20px;

		.card {
			background: rgba(255,255,255,0.2);
			border-radius: 20px;
			padding: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			backdrop-filter: blur(10px);
			box-shadow: 0 8px 32px rgba(0,0,0,0.1);
			border: 1px solid rgba(255,255,255,0.3);
			transition: all 0.3s ease;
			cursor: pointer;
			position: relative;
			overflow: hidden;

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 12px 40px rgba(0,0,0,0.2);
			}

			&:active {
				transform: scale(0.98);
			}

			.icon {
				width: 50px;
				height: 50px;
				margin-bottom: 10px;
				filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
				z-index: 1;
			}

			.label {
				font-size: 16px;
				font-weight: 500;
				color: #fff;
				text-shadow: 0 2px 4px rgba(0,0,0,0.2);
				z-index: 1;
			}

			.sub-label {
				font-size: 12px;
				color: rgba(255,255,255,0.8);
				margin-top: 5px;
				z-index: 1;
			}

			.decor {
				position: absolute;
				right: -20px;
				bottom: -20px;
				width: 80px;
				height: 80px;
				opacity: 0.3;
				animation: float 3s ease-in-out infinite;
			}
		}

		.learn-card {
			background: linear-gradient(135deg, rgba(168,224,99,0.7), rgba(86,171,47,0.7));
		}

		.yunmu-card {
			background: linear-gradient(135deg, rgba(255,154,158,0.7), rgba(250,208,196,0.7));
		}

		.games-card {
			background: linear-gradient(135deg, rgba(161,196,253,0.7), rgba(194,233,251,0.7));
		}

		.profile-card {
			background: linear-gradient(135deg, rgba(255,193,7,0.7), rgba(255,235,59,0.7));
		}
	}

	.daily-tip {
		background: rgba(255,255,255,0.2);
		border-radius: 20px;
		padding: 15px;
		display: flex;
		align-items: center;
		backdrop-filter: blur(10px);

		.tip-icon {
			width: 60px;
			height: 60px;
			margin-right: 15px;
			animation: float 3s ease-in-out infinite;
		}

		.tip-content {
			flex: 1;

			.tip-title {
				font-size: 16px;
				color: #fff;
				font-weight: bold;
				display: block;
				margin-bottom: 5px;
			}

			.tip-text {
				font-size: 14px;
				color: rgba(255,255,255,0.8);
			}
		}
	}
}
</style>
