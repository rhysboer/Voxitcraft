#version 330 core

in vec2 _texCoords;

uniform sampler2D screenColour;
uniform sampler2D screenDepth;
uniform int effectType;

out vec4 FragColor;

void main()
{
	vec4 colour = texture(screenColour, _texCoords).rgba;
	float depth = texture(screenDepth, _texCoords).r; 

	vec4 result = colour;

	// Under Water
	if(effectType == 1){
		result.rgb = mix(colour.rgb, vec3(0, 0.5, 1), clamp(pow(depth, 20.0f), 0.0, 1.0));
	}

	FragColor = result;
}