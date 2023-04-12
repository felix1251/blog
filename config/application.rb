require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BlogApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.exceptions_app = self.routes
    config.active_storage.routes_prefix = '/storage'

    config.time_zone = 'Singapore'
    config.active_record.default_timezone = :local
  end
end
