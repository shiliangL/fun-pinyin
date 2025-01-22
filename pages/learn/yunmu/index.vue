<template>
	<view class="yunmu-container">
		<view class="header">
			<text class="title">韵母学习</text>
		</view>

		<view class="grid-container">
			<view
				v-for="(pinyin, index) in pinyinList"
				:key="index"
				class="pinyin-card"
				@click="playAudio(pinyin)"
				:class="{ playing: currentPlaying === pinyin }"
			>
				<text class="pinyin">{{ pinyin }}</text>
				<image
					class="play-icon"
					:src="currentPlaying === pinyin ? '/static/icons/pause.png' : '/static/icons/play.png'"
				></image>
				<view v-if="loading === pinyin" class="loading-spinner"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pinyinList: ['a', 'o', 'e', 'i', 'u', 'ü', 'ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er', 'an', 'en', 'in', 'un', 'ün', 'ang', 'eng', 'ing', 'ong'],
			currentPlaying: null,
			loading: null,
			audioContext: null
		}
	},
	methods: {
		playAudio(pinyin) {
			if (this.currentPlaying === pinyin) {
				this.stopAudio();
				return;
			}

			this.loading = pinyin;
			this.currentPlaying = null;

			if (this.audioContext) {
				this.audioContext.destroy();
			}

			this.audioContext = uni.createInnerAudioContext();
			this.audioContext.src = `/static/audio/${pinyin}.mp3`;

			this.audioContext.onPlay(() => {
				this.loading = null;
				this.currentPlaying = pinyin;
			});

			this.audioContext.onError((err) => {
				console.error('Audio error:', err);
				uni.showToast({
					title: '播放失败',
					icon: 'none'
				});
				this.loading = null;
				this.currentPlaying = null;
			});

			this.audioContext.onEnded(() => {
				this.currentPlaying = null;
			});

			this.audioContext.play();
		},
		stopAudio() {
			if (this.audioContext) {
				this.audioContext.stop();
				this.audioContext.destroy();
				this.audioContext = null;
			}
			this.currentPlaying = null;
			this.loading = null;
		}
	},
	beforeDestroy() {
		this.stopAudio();
	}
}
</script>

<style lang="scss">
.yunmu-container {
	padding: 20px;

	.header {
		margin-bottom: 20px;

		.title {
			font-size: 20px;
			font-weight: bold;
			color: #333;
		}
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;

		.pinyin-card {
			background: #fff;
			border-radius: 8px;
			padding: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			box-shadow: 0 2px 6px rgba(0,0,0,0.1);
			position: relative;
			transition: all 0.2s ease;

			&.playing {
				background: #f0f8ff;
				transform: scale(1.05);
			}

			.pinyin {
				font-size: 18px;
				font-weight: bold;
				color: #333;
				margin-bottom: 8px;
			}

			.play-icon {
				width: 24px;
				height: 24px;
			}

			.loading-spinner {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 20px;
				height: 20px;
				border: 2px solid #007AFF;
				border-top-color: transparent;
				border-radius: 50%;
				animation: spin 1s linear infinite;
			}

			@keyframes spin {
				to {
					transform: translate(-50%, -50%) rotate(360deg);
				}
			}
		}
	}
}
</style>
