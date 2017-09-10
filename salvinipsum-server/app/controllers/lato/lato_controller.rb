include LatoView::Interface

class Lato::LatoController < ApplicationController

  layout 'lato_layout'

  before_action :core_controlUser

  # Home panel
  def dashboard
    view_setCurrentVoice('dashboard')
    @profiles = Profile.all
  end

  # Parameters for datas

  protected def phrase_params
    params.require(:phrase).permit(:content, :profile_id, :checked)
  end

  protected def paragraph_params
    params.require(:paragraph).permit(:profile_id)
  end

  protected def profile_params
    params.require(:profile).permit(:name, :key, :facebook_id, :picture)
  end

end
