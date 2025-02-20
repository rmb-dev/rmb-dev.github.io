# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "rmb-blog"
  spec.version       = "0.1.0"
  spec.authors       = ["rmb dev"]
  spec.email         = ["rombyr@outlook.com"]

  spec.description   = "This Jekyll blog is designed to share content and engage with readers."
  spec.summary       = %q{A short description of my theme}
  spec.homepage      = "https://rmb-dev.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
