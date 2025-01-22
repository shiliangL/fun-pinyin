<template>
	<view class="learn-container">
		<view class="header">
			<text class="title">拼音学习</text>
			<view class="progress">
				<text>学习进度：{{progress}}%</text>
				<view class="progress-bar">
					<view class="progress-fill" :style="{width: progress + '%'}"></view>
				</view>
			</view>
		</view>

		<view class="card-container">
			<view class="card" @click="navigateTo('shengmu')">
				<image class="icon" src="/static/icons/shengmu.png"></image>
				<text class="label">声母</text>
				<view class="play-btn" @click.stop="playAudio('ba')">
					<image src="/static/icons/play.png"></image>
				</view>
			</view>

			<view class="card" @click="navigateTo('yunmu')">
				<image class="icon" src="/static/icons/yunmu.png"></image>
				<text class="label">韵母</text>
				<view class="play-btn" @click.stop="playAudio('ma')">
					<image src="/static/icons/play.png"></image>
				</view>
			</view>

			<view class="card" @click="navigateTo('zhengti')">
				<image class="icon" src="/static/icons/zhengti.png"></image>
				<text class="label">整体认读</text>
				<view class="play-btn" @click.stop="playAudio('fa')">
					<image src="/static/icons/play.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			progress: 25,
			audioContext: null
		}
	},
	methods: {
		navigateTo(type) {
			uni.navigateTo({
				url: `/pages/learn/${type}`
			})
		},
		playAudio(type) {
			if (!this.audioContext) {
				this.audioContext = uni.createInnerAudioContext()
			}
			this.audioContext.src = `/static/audio/${type}.mp3`
			this.audioContext.play()
		}
	}
}
</script>

<style lang="scss">
.learn-container {
	padding: 20px;
	background: linear-gradient(135deg, #f6f9fc 0%, #eef1f5 100%);
	min-height: 100vh;

	.header {
		margin-bottom: 30px;
		padding: 20px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);

		.title {
			font-size: 24px;
			font-weight: bold;
			color: #333;
			text-align: center;
			margin-bottom: 15px;
		}

		.progress {
			margin-top: 15px;
			text-align: center;

			text {
				font-size: 14px;
				color: #666;
				display: block;
				margin-bottom: 8px;
			}

			.progress-bar {
				width: 100%;
				height: 8px;
				background: #e9ecef;
				border-radius: 4px;
				overflow: hidden;

				.progress-fill {
					height: 100%;
					background: #007AFF;
					border-radius: 4px;
					transition: width 0.3s ease;
				}
			}
		}
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 15px;

		.card {
			width: 48%;
			background: #fff;
			border-radius: 12px;
			padding: 20px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all 0.3s ease;
			cursor: pointer;

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 4px 16px rgba(0,0,0,0.15);
			}

			.icon {
				width: 80px;
				height: 80px;
				margin-bottom: 15px;
				transition: transform 0.3s ease;
			}

			&:hover .icon {
				transform: scale(1.1);
			}

			.label {
				font-size: 18px;
				color: #333;
				font-weight: 500;
				text-align: center;
				margin-bottom: 10px;
			}

			.play-btn {
				width: 40px;
				height: 40px;
				background: #007AFF;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0 2px 4px rgba(0,0,0,0.1);
				transition: all 0.2s ease;

				image {
					width: 20px;
					height: 20px;
				}

				&:active {
					transform: scale(0.95);
					background: darken(#007AFF, 10%);
				}
			}
		}
	}
}
</style>
