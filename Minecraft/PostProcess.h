#pragma once
#include "Framebuffer.h"
#include "ShaderManager.h"

class PostProcess {
public:

	PostProcess(const char* shaderPath, const float& sizeX, const float& sizeY, const FramebufferType& type);
	~PostProcess();

	Shader& GetShader() const;
	Framebuffer& GetBuffer() const;

	void Begin();
	void End();

	void Render();

private:

	Framebuffer* framebuffer;
	Shader* shader;

	unsigned int vao;
	unsigned int vbo;
};

