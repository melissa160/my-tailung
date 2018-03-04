class HomeController < ApplicationController
  def index
    render component: "#{controller_name}/#{action_name}", props: { names: ['Melissa', 'Ramirez', 'Pino'] }
  end
end
